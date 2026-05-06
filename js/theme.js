/* ---------- Eco impact estimation ---------- */

function calculateCarbonFootprint() {

  const resources =
    performance.getEntriesByType("resource");

  let totalBytes = 0;

  resources.forEach((resource) => {

    /*
      transferSize :
      taille réellement transférée

      encodedBodySize :
      fallback plus fiable
    */

    const size =
      resource.transferSize ||
      resource.encodedBodySize ||
      0;

    totalBytes += size;

  });

  /* ---------- Taille totale ---------- */

  const totalMB =
    totalBytes / (1024 * 1024);

  /* ---------- Estimation carbone ---------- */

  /*
    Approximation :
    ~0.5 g CO₂ / MB transféré
  */

  const carbon =
    totalMB * 0.5;

  /* ---------- Nombre de requêtes ---------- */

  const requests =
    resources.length;

  /* ---------- Élément HTML ---------- */

  const carbonElement =
    document.getElementById("carbonValue");

  if (!carbonElement) return;

  /* ---------- Si aucune donnée ---------- */

  if (totalBytes === 0) {

    carbonElement.innerHTML = `
      Données indisponibles
    `;

    return;

  }

  /* ---------- Affichage ---------- */

  carbonElement.innerHTML = `
    ${carbon.toFixed(2)} g CO₂ / visite<br>
    ${totalMB.toFixed(2)} MB • ${requests} requêtes
  `;

}

/* ---------- Chargement ---------- */

window.addEventListener("load", () => {

  /*
    Petit délai :
    laisse les ressources finir de charger
  */

  setTimeout(() => {

    calculateCarbonFootprint();

  }, 1200);

});
