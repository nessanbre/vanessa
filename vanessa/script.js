function showMoreInfo(topic) {
    const info = document.getElementById(`${topic}-info`);
    
    if (info.classList.contains("hidden")) {
      info.classList.remove("hidden");
    } else {
      info.classList.add("hidden");
    }
}
