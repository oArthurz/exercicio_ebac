$(document).ready(function()
{
    $('#carousel-imagens').slick(
        {
            autoplay: true,
            arrows: false
        })
    
    $('#telefone').mask('(00) 00000-0000'),
    {
        placeholder: '(DDD) 12345-6789'
    }

    $('#cpf').mask('000.000.000-00'),
    {
        placeholder:'123.456.789-00'
    }

    $('#cep').mask('000000-000'),
    {
        placeholder: '0123456-789'
    }

    $('form').validate(
        {
            rules:
            {
                nome:
                {
                    required: true
                },
                email:
                {
                    required:true
                },
                telefone:
                {
                    required: true
                },
                endereco:
                {
                    required:true 
                },
                cep:
                {
                    required: true
                },
                cpf:
                {
                    required: true
                }
            },
            messages:
            {
                nome:'Digite seu nome!',
                email:'Digite seu E-Mail!',
                telefone:'Insira seu telefone!',
                endereco:'Insira seu endereço!',
                cep:'Digite seu CEP!',
                cpf: 'Número de CPF'
            },

        submitHandler: function(form)
        {
            alert('Sua requisição foi enviada para análise, parábens pela aquisição!')
            form.reset()
        },
        invalidHandler: function(form, validador)
        {
            alert("Por favor, preencha os campos para prosseguir com a compra!")
        }
    })
})