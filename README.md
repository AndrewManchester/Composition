This is effectively three classes Point, Path and Queue. Created using composition.

**Composition allows for protected (hidden) methods.**

Point presently has no protected methods, so add one

    const hide = () => console.log("Hidden")

Now put it to use in two of the public methods

    const dump = () => { 
        hide() 
        return aPoint ${row} ${column} 
     }

    const dumpToArray = () => { 
         hide() 
         return [row, column] 
      }

Exercising dump and dumpToArray shows hide is being executed. Calls to just hide fail

    var p = Point(4,5) 
    console.log(p.dump())  
    p.hide() //does not work

**It does not allow chaining as with the inheritance version**

    var p = Path(Point(4,5),Point(6,7))
    p.addPoint(Point(77,88))
    p.dumpToArray() 
    p.addPoint(Point(1,2)).addPoint(Point(3,7)) //does not work
