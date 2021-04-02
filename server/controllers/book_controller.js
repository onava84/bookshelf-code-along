const books =[];
let id = 0;

module.exports = {
   read: (req, res) => {
      res.status(200).send(books)
   },
   create: (req, res) => {
      const { title, author } = req.body
      const newBook = {
         title,
         author,
         id
      };
      id++;
      books.push(newBook);
      res.status(200).send(books);
   },
   update: (req, res) => {
      const { title, author } = req.body
      const { id } = req.params

      const bookIndex = books.findIndex(e => e.id === +id)
      books[bookIndex] = {
         id: +id,
         title: title || books[bookIndex].title,
         author: author || books[bookIndex].author
      }
      res.status(200).send(books)
   },
   delete: (req, res) => {
      const {id} = req.params
      const elementIndex = books.findIndex(e => e.id === +id)
      books.splice(elementIndex,1)
      res.status(200).send(books)
   }
}

