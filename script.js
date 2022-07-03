



        // Load function every 0 second
        setInterval(function() {
            textarea();
            charactercount();
        }, 0);

        function textarea() {
            return $('textarea').val();
        }

        function charactercount() {
            $('#charactercount').text(textarea().length);
        }
        $('#sentececase').click(function() {
            var sentececase = textarea().toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(c) {
                return c.toUpperCase()
            });
            $('textarea').val(sentececase);
        })
        $('#lowercase').click(function() {
            $('textarea').val(textarea().toLowerCase());
        })
        $('#uppercase').click(function() {
            $('textarea').val(textarea().toUpperCase());
        })
        $('#titlecase').click(function() {
            text = textarea().toLowerCase().split(' ');
            for (var i = 0; i < text.length; i++) {
                text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
            }
            $('textarea').val(text.join(' '));
        })
        $('#alternatingcase').click(function() {
            var text = textarea().toLowerCase().split("");
            for (var i = 1; i < text.length; i += 2) {
                text[i] = text[i].toUpperCase();
            }
            $('textarea').val(text.join(""));
        })
        $('#inversecase').click(function() {
            var text = textarea().toLowerCase().split("");
            for (var i = 0; i < text.length; i += 2) {
                text[i] = text[i].toUpperCase();
            }
            $('textarea').val(text.join(""));
        })
    

			
