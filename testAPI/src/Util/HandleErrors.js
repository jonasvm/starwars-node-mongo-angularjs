function HandleErrors() {

}

const notDeclare = (variable,nameOfVariable) => {
    return new Promise((resolve, reject) => {
        if (variable === null) {
            reject(`A variável: ${nameOfVariable} não pode ter o valor null!`);
        } else if (typeof variable == 'undefined') {
            reject(`A variável: ${nameOfVariable} não foi definida!`);
        }
        else{
            resolve();
        }
    });
};

HandleErrors.prototype = {
    notDeclare
};

module.exports = new HandleErrors();