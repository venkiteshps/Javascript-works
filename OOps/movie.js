class movie {

    setmovie(id, title, language, genre) {

        this.id = id
        this.title=title 
        this.language = language
        this.genre = genre
    }
    diplaymovie() {
        console.log(this.id, this.title, this.language, this.genre);
    }

}

var thudarumInstance=new movie()
thudarumInstance.setmovie(11,"Thudarum","Malayalam","Thriller")
thudarumInstance.diplaymovie()

var avtarInstance=new movie()
avtarInstance.setmovie(55,"Avatar","English","Action")
avtarInstance.diplaymovie()