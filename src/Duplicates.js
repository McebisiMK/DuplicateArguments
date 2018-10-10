function Duplicates() {
    return {
        solution: function (numbers) {
            return GetDuplicates(numbers);
        }
    }

    function GetDuplicates(numbers) {
        return numbers.some(x=>numbers.indexOf(x)!=numbers.lastIndexOf(x));
    }
}