const cards = document.getElementById('sortable-cards');

new Sortable(cards, {
  animation: 150,
  chosenClass: "sortable-chosen",
  dragClass: "sortable-drag"
});
