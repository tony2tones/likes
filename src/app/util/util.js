var likeToggle = () => {
  buttonToggle("like", true);
  buttonToggle("noLike", false);
};
var noLikeToggle = () => {
  buttonToggle("like", false);
  buttonToggle("noLike", true);
};

var buttonToggle = (btnId, bool) => {
    const element = document.getElementById(btnId).disabled = bool;
  };

module.exports = {
  likeToggle: likeToggle,
  noLikeToggle: noLikeToggle,
  buttonToggle:buttonToggle
};
