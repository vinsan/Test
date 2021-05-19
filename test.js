export function PageSplitterCheck(items, itemsPerPage, checkItemsOnPage, checkItemBelongsTo){
	let splitter = new PageSplitter(items, itemsPerPage);
    let solution = [];
    solution[0] = splitter.pageCount();
    solution[1] = splitter.itemCount();
    solution[2] = splitter.pageItemCount(checkItemsOnPage);
    solution[3] = splitter.pageIndex(checkItemBelongsTo);
    return solution;
}


class PageSplitter{
	 constructor(items, itemsPerPage){
	  this.pages = [];
	  var i =0; //tiene traccia degli elementi di items
	  var j = 0;  //tiene traccia degli elementi di pages
	  var counter = 0;  //tiene traccia degli elementi in temp
	  var temp = [];
	  while(i<items.length){
	    temp[counter] = items[i];
	    counter++;
	    i++;
	    if(temp.length==itemsPerPage){
	      this.pages[j] = temp;
	      temp = [];
	      counter = 0;
	      j++;
	    }
	  }
		 if(temp!=[]){
			this.pages[j] = temp; 
		 }
  }
  
  pageCount(){
      return this.pages.length;
  }
  
  itemCount(){
    var ic = 0;
    var i = 0;
    while(i<this.pageCount()){
      ic = ic+this.pages[i].length;
      i++;
    }
      return ic;
  }
  
  pageItemCount(checkItemsOnPage){
    if(checkItemsOnPage<0||checkItemsOnPage>=this.pageCount())
    return -1;
    else return this.pages[checkItemsOnPage].length;
  }
  
  pageIndex(checkItemBelongsTo){
    var i = 0;
    while(i<this.pageCount()){
      var j = 0;
      while(j<this.pageItemCount(i)){
        if(this.pages[i][j]==checkItemBelongsTo)
          return j;
        j++;
      }
      i++;
    }
    return -1;  //elemento inesistente, ritorno -1;
  }
  
}

let splitter = new PageSplitter([1, 2, 3, 'a', 'b', 'c'], 2);
splitter.pageCount();  //3
splitter.itemCount();  //6
splitter.pageItemCount(0); //2
splitter.pageItemCount(3); //-1
splitter.pageIndex(2); //1
splitter.pageIndex(-2);  //-1
