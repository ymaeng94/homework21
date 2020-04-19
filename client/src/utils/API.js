import axios from "axios";

export default {
  getBooks: function() {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`));
  },


  getBook: function(id) {
    return axios.get("/api/books/" + id)..then(result => result.data);
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id).then(result => result.data);
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData).then(result => result.data);
  }
};
