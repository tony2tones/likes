var buttonToggle = (btnId, bool) => {
  const element = (document.getElementById(btnId).disabled = bool);
};


module.exports = {
  buttonToggle: buttonToggle
};
