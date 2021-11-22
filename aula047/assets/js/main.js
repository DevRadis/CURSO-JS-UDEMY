function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const relogio = document.querySelector(".relogio");
  // const iniciar = document.querySelector('.iniciar');
  // const pausar = document.querySelector('.pausar');  JÁ ESTÁ SENDO FEITO DENTRO DO DOCUMENT
  // const zerar = document.querySelector('.zerar');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("zerado");
      relogio.classList.add("iniciado");
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains("pausar")) {
      relogio.classList.remove("zerado");
      relogio.classList.remove("iniciado");
      relogio.classList.add("pausado");
      clearInterval(timer);
    }

    if (el.classList.contains("zerar")) {
      relogio.classList.remove("pausado");
      relogio.classList.remove("iniciado");
      relogio.classList.add("zerado");
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      segundos = 0;
    }
  });

  // iniciar.addEventListener('click', function(evento)  {
  //   relogio.classList.remove('pausado');
  //   clearInterval(timer);
  //   iniciaRelogio();
  // });

  // pausar.addEventListener('click', function(evento)  {
  //   relogio.classList.add('pausado');
  //   clearInterval(timer);
  // });

  // zerar.addEventListener('click', function(evento)  {
  //   clearInterval(timer);
  //   relogio.innerHTML = '00:00:00';
  //   segundos = 0;
  // });
}

relogio();