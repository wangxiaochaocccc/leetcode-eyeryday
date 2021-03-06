// 面试题 03.06
var AnimalShelf = function() {
    this.cat = []
    this.dog = []
};

/** 
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function(animal) {
    if(animal[1] === 0){
        this.cat.push(animal[0])
    }else {
        this.dog.push(animal[0])
    }
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function() {
    if(this.dog.length === 0&&this.cat.length === 0) return [-1,-1]
    if(this.cat.length === 0){
        return [this.dog.shift(),1]
    }
    if(this.dog.length === 0){
        return [this.cat.shift(),0]
    }
    return this.cat[0] < this.dog[0] ? [this.cat.shift(),0]:[this.dog.shift(),1]
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function() {
    if(this.dog.length === 0) return [-1,-1]
    return [this.dog.shift(),1]
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function() {
    if(this.cat.length === 0) return [-1,-1]
    return [this.cat.shift(),0]
};

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */