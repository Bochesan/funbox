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

        // Проверка продукта на состояние и расставление подписей под ним.
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

        // Выбор продукта или бездействие при состоянии disabled.
        _checked() {
            if (this._self.classList.contains('disabled')) {
                return false;
            }
            else {
                this._self.classList.toggle('selected');
                if (!this._self.classList.contains('selected')) {
                    this._title.innerHTML = this._title.getAttribute('data-title');
                    this._title.classList.remove('product-box__title--color');
                }
            }
        }

        // Проверка на состояние selected и срабатывание hover`а при потере наведения.
        _mouseleave() {
            if (this._self.classList.contains('selected')) {
                this._title.innerHTML = this._title.getAttribute('data-title');
                this._title.classList.remove('product-box__title--color');
            }
        }

        // Проверка на состояние selected и срабатывание hover`а при наведении.
        _mouseenter() {
            if (this._self.classList.contains('selected')) {
                this._title.innerHTML = this._title.getAttribute('data-hover');
                this._title.classList.add('product-box__title--color');
            }
        }

        // Инициализация
        init() {
            let self = this;

            // Клик по контейнеру
            self._container.addEventListener('click', function() {
                self._checked();
                self._checkFootnote();
            });

            // Клик по по слову 'купи'. Т.к. слово 'купи' появляется динамически
            // приходится при клике искать существование эелеменкта
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

            // При инициализации проходим по всем продуктам и расставляем
            // нужные подписи
            self._checkFootnote();
        }
    }

    // Объявляем коллекцию продуктов.
    let products = document.querySelectorAll('.product-box');

    // Fix для IE11 т.к. он не может перебирать коллекции через forEach
    for (let i = 0; i < products.length; ++i) {
        let item = products[i];
        let product = new Product(item, 'product-box__container', 'product-box__footnote', 'product-box__title');
    }


})();
