document.addEventListener('DOMContentLoaded', function () {
    // Specify the table names manually with section headers
    var tableNames = [
        'A10', 'A11', 'A12', 'A20', 'A21', 'A22', 'A23', 'A30', 'A31', 'A32',
        'B10', 'B11', 'B12', 'B20', 'B21', 'B22', 'B23', 'B30', 'B31', 'B32',
        'C10', 'C11', 'C12', 'C20', 'C21', 'C22', 'C30', 'C31', 'C32', 'C33', 'C40', 'C41', 'C42', 'C43', 'C44', 'C45', 'C46', 'C47',
        'D10', 'D11', 'D12', 'D20', 'D21', 'D22', 'D30', 'D31', 'D32', 'D33', 'D40', 'D41', 'D42', 'D43', 'D44', 'D45', 'D46', 'D47'
    ];

    createTables(tableNames);
});

function createTables(tableNames) {
    var restaurantLayout = document.getElementById('restaurantLayout');
    var currentSection = ''; // Track the current section to add section headers

    // Loop through the provided table names
    for (var i = 0; i < tableNames.length; i++) {
        var table = document.createElement('div');
        table.className = 'table';
        
        // Use the provided table name
        var tableName = tableNames[i];
        table.innerText = 'Table ' + tableName;

        // Extract section letter from the table name (A, B, C, D)
        var sectionLetter = tableName.charAt(0);

        // If the section changes, add a section header
        if (sectionLetter !== currentSection) {
            var sectionHeader = document.createElement('div');
            sectionHeader.className = 'sectionHeader';
            sectionHeader.innerText = 'Section ' + sectionLetter;
            restaurantLayout.appendChild(sectionHeader);
            currentSection = sectionLetter;
        }
        
        table.addEventListener('click', changeColor);
        table.addEventListener('dblclick', changeBackToGreen);

        restaurantLayout.appendChild(table);
    }
}

function changeColor() {
    this.style.backgroundColor = 'red'; // Change the color to red when clicked
}

function changeBackToGreen() {
    this.style.backgroundColor = 'green'; // Change the color back to green when double-clicked
}
