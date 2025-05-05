document.getElementById("deleteForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const id = document.getElementById("deleteId").value;
    const message = document.getElementById("message");
  
    try {
      await axios.delete(`https://681401d6225ff1af1627ad7f.mockapi.io/Famous_WorksOfArts/${id}`);
      message.textContent = `Artwork with ID ${id} has been successfully deleted.`;
      message.style.color = "green";
    } catch (error) {
      message.textContent = `Error deleting artwork with ID ${id}.`;
      message.style.color = "red";
      console.error(error);
    }
  });
  