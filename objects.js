var playlist = {
  Adele: "Hello",
  Elevation: "There is a Cloud",
  Ed_Sheeran: "Perfect"
};
function updatePlaylist (obj, key, value){
  return Object.assign({}, playlist, {Slowdive: ["My Bloody Valentine"]})
};
