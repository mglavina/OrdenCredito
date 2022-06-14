export const extendsNumber = () => {
    Number.prototype.toCurrency = function () {
      const value = this.toFixed(2);
      const formatedValue = Intl.NumberFormat('es-AR', { minimumFractionDigits: 2 }).format(value);
        return `$ ${formatedValue}`;
    };
};