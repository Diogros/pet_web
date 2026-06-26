$(document).ready(function() {
    
    $('#form-atendimento').submit(function(event) {
        event.preventDefault();

        const tutor = $('#tutor').val().trim();
        const pet = $('#pet').val().trim();
        const servico = $('#servico').val();

        if(tutor === "" || pet === "" || servico === "") return;

        const agora = Date.now();
        const novoCardHTML = `
            <div class="card" data-time="${agora}">
                <strong>🐶 Pet: ${pet}</strong>
                <span>👤 Tutor: ${tutor}</span>
                <span>✂️ Serviço: ${servico}</span>
                <div class="card-actions">
                    <button class="btn-avancar">Avançar ➔</button>
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
            $card.removeClass('alerta-tempo');
            
            $card.attr('data-time', Date.now()); 
            
            if(colunaAtual === 'coluna-espera') {
                $card.addClass('atendimento');
                $('#coluna-banho .cards-container').append($card);
            
            } else if (colunaAtual === 'coluna-banho') {
                $card.removeClass('atendimento').addClass('concluido');
                $card.find('.btn-avancar').remove(); 
                $('#coluna-concluido .cards-container').append($card);
            }
            
            $card.fadeIn(400);
        });
    });

    function verificarAtrasos(seletorColuna, tempoLimiteMs) {
        $(seletorColuna + ' .card').each(function() {
            const tempoEntrada = parseInt($(this).attr('data-time'));
            const agora = Date.now();
            
            if((agora - tempoEntrada) > tempoLimiteMs) { 
                $(this).addClass('alerta-tempo'); 
            }
        });
    }

    setInterval(function() {
        verificarAtrasos('#coluna-espera', 10000);
        verificarAtrasos('#coluna-banho', 15000);
    }, 2000);
});