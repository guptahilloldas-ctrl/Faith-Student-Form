document.addEventListener('DOMContentLoaded', function() {
            // console.log('Initializing Flatpickr...');
            const dateInputs = document.querySelectorAll(".date-picker");
            // console.log('Found date inputs:', dateInputs.length);
            
            const fpDate = flatpickr("#date", {
                dateFormat: "Y-m-d",
                allowInput: true,
                disableMobile: true
            });
            
            const fpDob = flatpickr("#dob", {
                dateFormat: "Y-m-d",
                allowInput: true,
                disableMobile: true
            });

            const fpTestScore = flatpickr("#test-date-1", {
                dateFormat: "Y-m-d",
                allowInput: true,
                disableMobile: true
            });

            const fpTestScore2 = flatpickr("#test-date-2", {
                dateFormat: "Y-m-d",
                allowInput: true,
                disableMobile: true
            });

            const fpExamDate1 = flatpickr("#exam-date-1", {
                dateFormat: "Y-m-d",
                allowInput: true,
                disableMobile: true
            });

            const fpExamDate2 = flatpickr("#exam-date-2", {
                dateFormat: "Y-m-d",
                allowInput: true,
                disableMobile: true
            });
            
            document.querySelector('[data-input="date"]').addEventListener('click', () => fpDate.open());
            document.querySelector('[data-input="dob"]').addEventListener('click', () => fpDob.open());
            document.querySelector('[data-input="test-date-1"]').addEventListener('click', () => fpTestScore.open());
            document.querySelector('[data-input="test-date-2"]').addEventListener('click', () => fpTestScore.open());
            document.querySelector('[data-input="exam-date-1"]').addEventListener('click', () => fpExamDate1.open());
            document.querySelector('[data-input="exam-date-2"]').addEventListener('click', () => fpExamDate2.open());
            
            // console.log('Flatpickr initialized.');
        });