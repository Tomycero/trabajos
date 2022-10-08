function desplegar1() {
  var x = document.getElementsByClassName('subseccion1')
  Array.from(x).forEach((x) => {
    if (getComputedStyle(x).display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  })
}

function desplegar2() {
  var x = document.getElementsByClassName('subseccion2')
  Array.from(x).forEach((x) => {
    if (getComputedStyle(x).display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  })
}

function desplegar3() {
  var x = document.getElementsByClassName('subseccion3')
  Array.from(x).forEach((x) => {
    if (getComputedStyle(x).display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  })
}

function desplegado1() {
  var cambio = document.getElementById("boton1");
  if (cambio.innerHTML == "►PICADAS") {
    cambio.innerHTML = "▼PICADAS";
  } else {
    cambio.innerHTML = "►PICADAS";
  }
}

function desplegado2() {
  var cambio = document.getElementById("boton2");
  if (cambio.innerHTML == "►CARRERAS") {
    cambio.innerHTML = "▼CARRERAS";
  } else {
    cambio.innerHTML = "►CARRERAS";
  }
}

function desplegado3() {
  var cambio = document.getElementById("boton3");
  if (cambio.innerHTML == "►RALLY") {
    cambio.innerHTML = "▼RALLY";
  } else {
    cambio.innerHTML = "►RALLY";
  }
}

$(document).ready(function () {
  $("#fotosboton1").click(function () {
    $("#picadasfotos").show();
    $("#picadasvideos").hide();
    $("#carrerasfotos").hide();
    $("#carrerasvideos").hide();
    $("#rallyfotos").hide();
    $("#rallyvideos").hide();
    $(".sinresultados").hide();
    $(".elegircategoria").hide();
  });
});

$(document).ready(function () {
  $("#videosboton1").click(function () {
    $("#picadasfotos").hide();
    $("#picadasvideos").show();
    $("#carrerasfotos").hide();
    $("#carrerasvideos").hide();
    $("#rallyfotos").hide();
    $("#rallyvideos").hide();
    $(".sinresultados").hide();
    $(".elegircategoria").hide();
  });
});

$(document).ready(function () {
  $("#fotosboton2").click(function () {
    $("#picadasfotos").hide();
    $("#picadasvideos").hide();
    $("#carrerasfotos").show();
    $("#carrerasvideos").hide();
    $("#rallyfotos").hide();
    $("#rallyvideos").hide();
    $(".sinresultados").hide();
    $(".elegircategoria").hide();
  });
});

$(document).ready(function () {
  $("#videosboton2").click(function () {
    $("#picadasfotos").hide();
    $("#picadasvideos").hide();
    $("#carrerasfotos").hide();
    $("#carrerasvideos").show();
    $("#rallyfotos").hide();
    $("#rallyvideos").hide();
    $(".sinresultados").hide();
    $(".elegircategoria").hide();
  });
});

$(document).ready(function () {
  $("#fotosboton3").click(function () {
    $("#picadasfotos").hide();
    $("#picadasvideos").hide();
    $("#carrerasfotos").hide();
    $("#carrerasvideos").hide();
    $("#rallyfotos").show();
    $("#rallyvideos").hide();
    $(".sinresultados").hide();
    $(".elegircategoria").hide();
  });
});

$(document).ready(function () {
  $("#videosboton3").click(function () {
    $("#picadasfotos").hide();
    $("#picadasvideos").hide();
    $("#carrerasfotos").hide();
    $("#carrerasvideos").hide();
    $("#rallyfotos").hide();
    $("#rallyvideos").show();
    $(".sinresultados").hide();
    $(".elegircategoria").hide();
  });
});