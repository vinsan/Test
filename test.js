function PageSplitterCheck(items, itemsPerPage, checkItemsOnPage, checkItemBelongsTo){
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
  }
  
  pageCount(){
      return 0;
  }
  
  itemCount(){
      return 0;
  }
  
  pageItemCount(checkItemsOnPage){
      return 0;
  }
  
  pageIndex(checkItemBelongsTo){
      return 0;
  }
  
}

let splitter = new PageSplitter([1, 2, 3, 'a', 'b', 'c'], 2);
console.log(splitter.pageCount());
console.log(splitter.itemCount());
console.log(splitter.pageItemCount(0));
console.log(splitter.pageItemCount(3));
console.log(splitter.pageIndex(2));
console.log(splitter.pageIndex(-2));
