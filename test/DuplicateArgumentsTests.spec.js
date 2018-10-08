describe("Duplicates", function () {
    describe("Solution", function () {
        describe("Given empty array", function () {
            it("Should return false", function () {
                //----------------Arrange------------
                let numbers = [];
                let duplicates = new Duplicates();

                //----------------Act----------------
                let actual = duplicates.solution(numbers);

                //----------------Assert-------------
                let expected = false;
                expect(actual).toBe(expected);
            })
        })

        describe("Given an array containing a single number", function () {
            [{ numbers: [1], output: false },
            { numbers: [10], output: false },
            { numbers: [100], output: false }]
                .forEach(function (element) {
                    it("Should return false", function () {
                        //----------------Arrange------------
                        let duplicates = new Duplicates();

                        //----------------Act----------------
                        let actual = duplicates.solution(element.numbers);

                        //----------------Assert-------------
                        let expected = element.output;
                        expect(actual).toBe(expected);
                    })
                })
        })

        describe("Given an array containing unique numbers", function () {
            [{ numbers: [1, 5], output: false },
            { numbers: [10, 69, 45], output: false },
            { numbers: [100, 89, 32, 69], output: false }]
                .forEach(function (element) {
                    it("Should return false", function () {
                        //----------------Arrange------------
                        let duplicates = new Duplicates();

                        //----------------Act----------------
                        let actual = duplicates.solution(element.numbers);

                        //----------------Assert-------------
                        let expected = element.output;
                        expect(actual).toBe(expected);
                    })
                })
        })

        describe("Given an array containing identical numbers", function () {
            [{ numbers: [1, 2, 3, 2], output: true },
            { numbers: [1, 5, 1, 6, 1, 3], output: true },
            { numbers: [4, 5, 4, 6, 4, 7, 4, 8], output: true }]
                .forEach(function (element) {
                    it("Should return false", function () {
                        //----------------Arrange------------
                        let duplicates = new Duplicates();

                        //----------------Act----------------
                        let actual = duplicates.solution(element.numbers);

                        //----------------Assert-------------
                        let expected = element.output;
                        expect(actual).toBe(expected);
                    })
                })
        })

        describe("Given an array containing identical numbers as strings", function () {
            [{ numbers: ['1', '2', '3', '2'], output: true },
            { numbers: ['1', '5', '1', '6', '1', '3'], output: true },
            { numbers: ['4', '5', '4', '6', '4', '7', '4', '8'], output: true }]
                .forEach(function (element) {
                    it("Should return false", function () {
                        //----------------Arrange------------
                        let duplicates = new Duplicates();

                        //----------------Act----------------
                        let actual = duplicates.solution(element.numbers);

                        //----------------Assert-------------
                        let expected = element.output;
                        expect(actual).toBe(expected);
                    })
                })
        })
    })
})