;(function() {

    class Product {
        constructor(self, container, footnote, title) {
            if (self === undefined) {
                return false;
            }
            this._self = self;
            this._container = this._self.querySelectorAll('.' + container)[0];
            this._footnote = this._self.querySelectorAll('.' + footnote)[0];
            this._title = this._self.querySelectorAll('.' + title)[0];
            this.init();
        }

        _checkFootnote() {
            if (this._self.classList.contains('selected')) {
                this._footnote.innerHTML = this._footnote.getAttribute('data-selected');
            }
            else if (this._self.classList.contains('disabled')) {
                this._footnote.innerHTML = this._footnote.getAttribute('data-disabled');
            }
            else {
                this._footnote.innerHTML = `Чего сидишь? Порадуй котэ, <span class="product-box__footnote-button">купи.</span>`;
            }
        }

        _checked() {
            if (this._self.classList.contains('disabled')) {
                return false;
            }
            else {
                this._self.classList.toggle('selected');
            }
        }

        _mouseenter() {
            if (this._self.classList.contains('selected')) {
                this._title.innerHTML = 'Сказочное заморское яство';
            }
        }

        _mouseleave() {
            if (this._self.classList.contains('selected')) {
                this._title.innerHTML = 'Title';
            }
        }

        init() {
            let self = this;

            self._container.addEventListener('click', function() {
                self._checked();
                self._checkFootnote();
            });

            self._self.onclick = function(e) {
                if (self._self.querySelectorAll('.product-box__footnote-button')[0] == undefined) {
                    return false;
                }

                let target = e.target;
                let buyButton = self._self.querySelectorAll('.product-box__footnote-button')[0];

                if (target == buyButton) {
                    self._checked();
                    self._checkFootnote();
                }
            }

            self._container.addEventListener('mouseenter', function() {
                self._mouseenter();
            });

            self._container.addEventListener('mouseleave', function() {
                self._mouseleave();
            });

            self._checkFootnote();
        }
    }

    let productArr = [];
    let products = document.querySelectorAll('.product-box');

    products.forEach(function(item) {
        let product = new Product(item, 'product-box__container', 'product-box__footnote', 'product-box__title');
        productArr.push(item);
    });

})();
