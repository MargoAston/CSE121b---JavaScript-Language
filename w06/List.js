// spelling1stgrade

// This is 5 weeks of first grade spelling lists
const aList = {
  grade: "1st Grade",
    lists: [
      {
        spellingPattern: "a",
        word1: ["ant", "", "nt", "images/rsz_ant.png"],
        word2: ["flag", "fl", "g", "images/rsz_flag.png"],
        word3: ["mad", "m", "d", "images/rsz.mad.png"],
        word4: ["sam", "s", "m", "images/rsz.pants.png"],
        word5: ["pants", "p", "nt", "images/rsz_sam.png"],
        wordsCorrect: 0,
      },
      {
        spellingPattern: "i",
        word1: ["lid", "l", "d", "http://"],
        word2: ["pig", "p", "g", "http://"],
        word3: ["sit", "s", "t", "http://"],
        word4: ["drip", "dr", "p", "http://"],
        word5: ["grin", "gr", "n", "http://"]
        wordsCorrect: 0,
      }, 
    ],

    init(){
      setCourseInfo(this);
      renderLists(this.lists);
    },

    changeWordsCorrect: function (spellingPattern, add = true) {
      // find the right list ... Array.findIndex will work here
      const listIndex = this.lists.findIndex(
        (list) => list.spellingPattern == spellingPattern
      );
      if (listIndex >=0) {
        if (add) {
            this.lists[listIndex].wordsCorrect++;
        } else {
            this.lists[sectionIndex].wordsCorrect--;
        }
        renderSection(this.sections);
      }
    },
};

function setListInfo(list) {
    const listGrade = document.querySelector("#home-title");
    listGrade.textContent = list.grade;
}

export default aList;