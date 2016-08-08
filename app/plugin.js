(function() {
    var AddressExposer = {
        lastAddress: '',

        selectors: {
            address: 'span[itemtype="http://schema.org/PostalAddress"]',
            descriptionH2: 'h2:contains("Description")'
        },

        init: function () {
            this.checkAddress();
        },

        checkAddress: function () {
            var currentAddress = $(this.selectors.address).text().trim();
            if (currentAddress !== this.lastAddress) {
                $(this.selectors.descriptionH2).next('p').prepend('<b>' + currentAddress + '</b><br>');
                this.lastAddress = currentAddress;
            }

            setTimeout(this.checkAddress.bind(this), 500);
        }
    };

    var GalleryPicSwitcher = {
        keys: {
            left: 37,
            right: 39
        },

        init: function () {
            $(window).on('keydown', function(e) {
                if (e.keyCode === this.keys.left) {
                    $('.slideshow-arrow .left-arrow').click();
                } else if (e.keyCode === this.keys.right) {
                    $('.slideshow-arrow .right-arrow').click();
                }
            }.bind(this));
        }
    };

    AddressExposer.init();
    GalleryPicSwitcher.init();

})();
