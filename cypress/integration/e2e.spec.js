/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
          cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type('1')
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('.post-3680 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-S').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('.post-4078 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').type('Bruna')
        cy.get('#billing_last_name').type('Lisboa')
        cy.get('#billing_company').type('ebac shop')
        cy.get('#select2-billing_country-container').click().type('Brasil').click()
        cy.get('#billing_address_1').type('Rua Jose Cortez, 32')
        cy.get('#billing_city').type('São Paulo')
        cy.get('#select2-billing_state-container').click().type('Sao Paulo').click()
        cy.get('#billing_postcode').type('04470100')
        cy.get('#billing_phone').type('11934521228')
        cy.get('#billing_email').type('brunalisboa@ebac.com')
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });


})