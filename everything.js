const Point = (row, column) => {
   
   const getRow = () => row
   
   const getColumn = () => column 
   
   const dump = () => `aPoint ${row} ${column}` 
    
   const dumpToArray = () => [row, column]

   const equal = (aPoint) => { 
       return (row === aPoint.getRow() &&  
               column === aPoint.getColumn()) ? true : false
    }     
   
   return { getRow, getColumn, dump, dumpToArray, equal }
}



const Path = (...points) => {
   
    const lastPoint = () =>  points[points.length-1]
        
    const addPoint = (aPoint)  =>  points.push(aPoint)

    const thePoints = () => points 
     
    const dumpToArray = () =>  points.map( aPoint => aPoint.dumpToArray() )

    const clone = () => Path(...points) 
    
    const justUniquePoints = ()  => {
    //Take an array 
    //Starting with first point. Are any other points in the array identical
    //if no move on to check the next point
    //if yes then the path has two identical points
   //  let points = this.thePoints()  
     let justUnique = true
     for (let i=0; i < points.length; i++) {
         for (let j=0; j < points.length; j++) {
            if (i !== j) {
              if (points[i].equal(points[j]) === true) {
                justUnique = false
                break
             }
          }
       } 
     }
     return justUnique
    }
    
    const pointInPath = (aPoint) => {
      let inPath = false
      for (let i=0; i < points.length; i++) {
             if (points[i].equal(aPoint) === true) {
                inPath = true
                break
             }
     }
     return inPath
   }  
   
   return { lastPoint, addPoint, thePoints, dumpToArray, clone, justUniquePoints, pointInPath, x: 34}
}

const Queue  = (aPath) => {
    
      let paths = []
    
      if (aPath !== undefined) {
        var x = Object.assign({}, aPath)
        paths = [x]
      } 
      else {
        paths = [] 
      }
    
    const addPaths = (...aPath) =>  //so addPaths(p1,p2,p3) becomes [p1,p2,p3]
      aPath.map( singlePath => paths.push(singlePath))
    
    
    const thePaths = () =>  paths

    const dumpToArray = () => paths.map( aPath => aPath.dumpToArray() ) 
    
    const dumpToPoints = () => paths.map( aPath => aPath.thePoints() )

    const removePathsWithDuplicatePoints = () => {
      var t = paths.filter( aPath => { 
         return aPath.justUniquePoints()
       })
     
      paths = []
      for (let i=0; i < t.length; i++) {
         this.addPaths( t[i])
       }
       return this
    }
    return { addPaths, thePaths, dumpToArray, dumpToPoints, removePathsWithDuplicatePoints }
}

module.exports =  { Point, Path, Queue }


