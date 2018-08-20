function Duplicates() {
    return {
        solution: function (numbers) {
            return GetDuplicates(numbers);
        }
    }

    function GetDuplicates(numbers) {
        let duplicate = false;
        numbers.forEach(number => {
            let count = 0;
            for (let index = 0; index < numbers.length; index++) {
                if (numbers[index] == number) {
                    count++;
                }
            }
            if (count > 1) {
                duplicate = true
            }
        });
        return duplicate;
    }
}