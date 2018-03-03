var playList = {
  Adele: "Hello",
  Elevation: "There is a Cloud",
  Ed_Sheeran: "Perfect"
};
function updatePlaylist (obj, key, value){
  return Object.assign({}, obj, {[key]:value})
};
updatePlaylist (playList, "Slowdive", "My Bloody Valentine")
return playList;
