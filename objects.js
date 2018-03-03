var playlist = {
  Adele: "Hello",
  Elevation: "There is a Cloud",
  Ed_Sheeran: "Perfect"
};
function updatePlaylist (obj, key, value){
  obj[key] = value
  return obj
};

updatePlaylist (playlist, "Slowdive", "Alison");

function removeFromPlaylist (obj, key, value){
  delete obj.key;
  return Object.assign (obj, {[key]: value})
}
removeFromPlayList ("Slowdive", "Alison")
