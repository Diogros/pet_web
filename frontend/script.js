$(document).ready(function() {
    
    $('#form-atendimento').submit(function(event) {
        event.preventDefault();

        const tutor = $('#tutor').val().trim();
        const pet = $('#pet').val().trim();
        const servico = $('#servico').val();

        if(tutor === "" || pet === "" || servico === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const horaCriacao = Date.now();

        const novoCardHTML = `
            <div class="card" data-time="${horaCriacao}">
                <strong>🐶 Pet: ${pet}</strong>
                <span>👤 Tutor: ${tutor}</span>
                <span>✂️ Serviço: ${servico}</span>
                <div class="card-actions">
                    <button class="btn-avancar">Avançar Status ➔</button>
                </div>
            </div>
        `;

        const $cardVisual = $(novoCardHTML).hide();
        $('#coluna-espera .cards-container').append($cardVisual);
        $cardVisual.fadeIn(600); 

        this.reset();
    });

    $(document).on('click', '.btn-avancar', function() {
        const $card = $(this).closest('.card');
        const colunaAtual = $card.closest('.kanban-coluna').attr('id');

        $card.fadeOut(400, function() {
            
            if(colunaAtual === 'coluna-espera') {
                $card.removeClass('alerta-tempo').addClass('atendimento');
                $('#coluna-banho .cards-container').append($card);
            
            } else if (colunaAtual === 'coluna-banho') {
                $card.removeClass('atendimento').addClass('concluido');
                $card.find('.btn-avancar').remove(); 
                $('#coluna-concluido .cards-container').append($card);
            }
            
            $card.fadeIn(400);
        });
    });

    setInterval(function() {
        const agora = Date.now();
        
        $('#coluna-espera .card').each(function() {
            const tempoCriacao = $(this).data('time');
            const diferenca = agora - tempoCriacao;

            if(diferenca > 10000) { 
                $(this).addClass('alerta-tempo'); 
            }
        });
    }, 2000);
});