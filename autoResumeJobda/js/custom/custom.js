class ToggleInput {
    constructor(radioName, enableValues, inputSelectors) {
        this.radioName = radioName;
        this.enableValues = enableValues;
        this.$inputs = $(inputSelectors);
        this.init();
    }

    init() {
        this.bindEvents();
        this.toggleInputs();
    }

    bindEvents() {
        $(`input[name="${this.radioName}"]`).on('change', () => this.toggleInputs());
    }

    toggleInputs() {
        const selectedValue = $(`input[name="${this.radioName}"]:checked`).val();
        if (this.enableValues.includes(selectedValue)) {
            this.$inputs.prop('disabled', false);
        } else {
            this.$inputs.prop('disabled', true);
        }
    }
}


class DynamicRowHandler {
    constructor(containerSelector, rowSelector, addBtnSelector, removeBtnSelector) {
        this.container = document.querySelector(containerSelector);
        this.rowSelector = rowSelector;
        this.addBtnSelector = addBtnSelector;
        this.removeBtnSelector = removeBtnSelector;

        if (this.container) {
            this.init();
        }
    }

    init() {
        this.container.addEventListener('click', (event) => {
            if (event.target.matches(this.addBtnSelector)) {
                this.addRow(event.target.closest(this.rowSelector));
            } else if (event.target.matches(this.removeBtnSelector)) {
                this.removeRow(event.target.closest(this.rowSelector));
            }
        });
    }

    addRow(row) {
        const newRow = row.cloneNode(true);
        const currentIndex = parseInt(row.dataset.index, 10);
        const nextIndex = this.getNextIndex();

        newRow.dataset.index = nextIndex;
        newRow.querySelectorAll('[name]').forEach((input) => {
            const name = input.getAttribute('name');
            input.setAttribute('name', name.replace(/\[\d+\]/, `[${nextIndex}]`));
            input.value = '';
        });

        this.container.appendChild(newRow);

        row.querySelector(this.removeBtnSelector).classList.remove('hidden');
    }

    removeRow(row) {
        if (this.container.children.length > 1) {
            this.container.removeChild(row);
            this.resetIndices();
        }
    }

    resetIndices() {
        const rows = this.container.querySelectorAll(this.rowSelector);
        rows.forEach((row, index) => {
            row.dataset.index = index;
            row.querySelectorAll('[name]').forEach((input) => {
                const name = input.getAttribute('name');
                input.setAttribute('name', name.replace(/\[\d+\]/, `[${index}]`));
            });
        });
    }

    getNextIndex() {
        const rows = this.container.querySelectorAll(this.rowSelector);
        const indices = Array.from(rows).map(row => parseInt(row.dataset.index, 10));
        return Math.max(...indices) + 1;
    }
}


// 폼 데이터를 수집하는 함수
function collectAndSaveFormData() {
    const form = document.querySelector('form'); // 페이지에 존재하는 첫 번째 폼을 선택

    const resumeData = new FormData(form);
    const data = {};
    resumeData.forEach((value, key) => {
        data[key] = value;
    });

    const step = form.getAttribute('data-step');

    const jsonData = JSON.parse(localStorage.getItem('ResumeFormData') || {});

    jsonData[step] = data;
    localStorage.setItem('ResumeFormData', JSON.stringify(jsonData));

    console.log(localStorage.getItem('ResumeFormData') || {});
}

async function loadDataFromChromeStorage() {
    const form = document.querySelector('form');
    const step = form.getAttribute('data-step');

    const data = JSON.parse(localStorage.getItem('ResumeFormData'));
    if (data) {
        if (form) {
            const stepData = data[step];
            if (stepData) {
                for (const key of Object.keys(stepData)) {
                    const elements = form.elements[key];
                    const match = key.match(/^(\w+)\[(\d+)\]/);

                    if (!elements && match) {
                        const dataType = match[1];
                        const index = parseInt(match[2], 10);
                        const loopContainers = form.querySelectorAll(`[data-loop="${dataType}"]`);

                        if (loopContainers.length <= index) {
                            const addButton = loopContainers[loopContainers.length-1].querySelector('[data-button="add"]');
                            await clickAndWait(addButton, `[data-loop="${dataType}"]`);
                        }
                    }

                    if (elements instanceof NodeList || Array.isArray(elements)) {
                        elements.forEach((element) => {
                            if (element.value === stepData[key]) {
                                element.removeAttribute('disabled');
                                element.checked = true;
                                element.click(); // 클릭 이벤트 트리거
                                element.closest('label').click();
                            }
                        });
                    } else if (elements) {
                        elements.value = stepData[key];
                        elements.removeAttribute('disabled');
                    }
                }
            }
        }
    }

}

$(document).ready(function() {
    loadDataFromChromeStorage();
    new ToggleInput('handicap.handicapYn', ['true'], 'select[name="handicap.handicapGradeCode"], select[name="handicap.handicapContentsCode"]');
    new ToggleInput('patriot.patriotYn', ['true'], 'input[name="patriot.patriotNumber"], input[name="patriot.relationship"], select[name="patriot.patriotRate"]');
    new ToggleInput(
        'military.militaryTypeCode', // 라디오 버튼의 name 속성
        ['01', '04'], // 비활성화 제거할 값 (군필, 복무중)
        'select[name="military.militaryBranchCode"], select[name="military.militaryPositionCode"], select[name="military.militaryDischargeCode"], input[name="military.militaryRole"], input[name="military.militaryStartDate"], input[name="military.militaryEndDate"]' // 제어할 input 요소들
    );
    new ToggleInput(
        'highschool.graduationTypeCode',
        ['01', '02', '03', '04', '05', '06', '07'],
        'select[name="military.militaryBranchCode"], select[name="military.militaryPositionCode"], select[name="military.militaryDischargeCode"], input[name="military.militaryRole"], input[name="military.militaryStartDate"], input[name="military.militaryEndDate"]' // 제어할 input 요소들
    );
});

document.addEventListener('DOMContentLoaded', () => {


    new DynamicRowHandler(
        '.subject[data-type="languageSkill"]',
        '.row.in-span.loop',
        '.btn.btn-icon.btn-add[data-button="add"]',
        '.btn.btn-icon.btn-remove[data-button="remove"]'
    );

    new DynamicRowHandler(
        '.subject[data-type="overseaExperience"]',
        '.row.in-span.loop',
        '.btn.btn-icon.btn-add[data-button="add"]',
        '.btn.btn-icon.btn-remove[data-button="remove"]'
    );

    new DynamicRowHandler(
        '.subject[data-type="license"]',
        '.row.loop',
        '.btn.btn-icon.btn-add[data-button="add"]',
        '.btn.btn-icon.btn-remove[data-button="remove"]'
    );

    new DynamicRowHandler(
        '.subject[data-type="softwareSkill"]',
        '.row.in-span.loop',
        '.btn.btn-icon.btn-add[data-button="add"]',
        '.btn.btn-icon.btn-remove[data-button="remove"]'
    );

    new DynamicRowHandler(
        '.subject[data-type="award"]',
        '.row.loop',
        '.btn.btn-icon.btn-add[data-button="add"]',
        '.btn.btn-icon.btn-remove[data-button="remove"]'
    );

    new DynamicRowHandler(
        '.subject[data-type="education"]',
        '.row.loop',
        '.btn.btn-icon.btn-add[data-button="add"]',
        '.btn.btn-icon.btn-remove[data-button="remove"]'
    );

    new DynamicRowHandler(
        '.subject[data-type="activity"]',
        '.row.loop',
        '.btn.btn-icon.btn-add[data-button="add"]',
        '.btn.btn-icon.btn-remove[data-button="remove"]'
    );

    new DynamicRowHandler(
        '.subject[data-type="volunteerActivity"]',
        '.row.loop',
        '.btn.btn-icon.btn-add[data-button="add"]',
        '.btn.btn-icon.btn-remove[data-button="remove"]'
    );

    new DynamicRowHandler(
        '.subject[data-type="college"]',
        '.row.loop',
        '.btn.btn-icon.btn-add[data-button="add"]',
        '.btn.btn-icon.btn-remove[data-button="remove"]'
    );

    new DynamicRowHandler(
        '.subject[data-type="graduateSchool"]',
        '.row.loop',
        '.btn.btn-icon.btn-add[data-button="add"]',
        '.btn.btn-icon.btn-remove[data-button="remove"]'
    );

    new DynamicRowHandler(
        '.subject[data-type="career"]',
        '.row.loop',
        '.btn.btn-icon.btn-add[data-button="add"]',
        '.btn.btn-icon.btn-remove[data-button="remove"]'
    );
});