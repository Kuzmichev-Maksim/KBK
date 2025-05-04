// home.js

document.addEventListener('DOMContentLoaded', function () {
    // Проверяем, существует ли уже DataTable
    if ($.fn.DataTable.isDataTable('#employeeTable')) {
        // Уничтожаем существующую таблицу
        $('#employeeTable').DataTable().destroy();
    }

    // Инициализация DataTables с ручным переводом
    const employeeTable = new DataTable('#employeeTable', {
        language: {
            lengthMenu: "Показать _MENU_ записей",
            zeroRecords: "Ничего не найдено",
            info: "Показано с _START_ по _END_ из _TOTAL_ записей",
            info: "Показано с _START_ по _END_ из _TOTAL_ записей",
            infoEmpty: "Показано с 0 по 0 из 0 записей",
            infoFiltered: "(отфильтровано из _MAX_ записей)",
            search: "Поиск:",
            paginate: {
                first: "Первая",
                last: "Последняя",
                next: "Следующая",
                previous: "Предыдущая"
            }
        },
        pagingType: 'full_numbers', // Пагинация с номерами страниц
        lengthMenu: [10, 25, 50, 100], // Выбор количества записей на странице
        dom: '<"top"lf>rt<"bottom"ip><"clear">' // Расположение элементов интерфейса
    });

    // // Обработка кнопки "Вернуть номер"
    // document.querySelectorAll('.btn-return').forEach(button => {
    //     button.addEventListener('click', function () {
    //         const employeeId = this.getAttribute('data-employee-id');
    //         alert(`Вернуть номер для сотрудника с ID: ${employeeId}`);
    //     });
    // });

    // // Обработка кнопки "Отдать номер"
    // document.querySelectorAll('.btn-assign').forEach(button => {
    //     button.addEventListener('click', function () {
    //         const employeeId = this.getAttribute('data-employee-id');
    //         alert(`Отдать номер сотруднику с ID: ${employeeId}`);
    //     });
    // });
});