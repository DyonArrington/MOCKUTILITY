document.addEventListener('DOMContentLoaded', function() {
    // Reclaimed Water Production Chart
    var ctxReclaimed = document.getElementById('reclaimedWaterChart').getContext('2d');
    var reclaimedWaterChart = new Chart(ctxReclaimed, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Reclaimed Water Production',
                data: [1200, 1500, 1800, 2000, 1700, 1600, 1900],
                borderColor: '#007BFF',
                fill: true
            }]
        }
    });

    // Groundwater Extraction Chart
    var ctxGroundwater = document.getElementById('groundwaterChart').getContext('2d');
    var groundwaterChart = new Chart(ctxGroundwater, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Groundwater Extraction',
                data: [900, 850, 800, 750, 780, 800, 820],
                backgroundColor: '#28A745'
            }]
        }
    });

    // CAP Water Supply Chart
    var ctxCapWater = document.getElementById('capWaterChart').getContext('2d');
    var capWaterChart = new Chart(ctxCapWater, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Imported CAP Water',
                data: [1000, 1200, 1100, 1050, 1150, 1250, 1300],
                backgroundColor: '#FFC107'
            }]
        }
    });

    // Water Distribution Pie Chart
    var ctxPie = document.getElementById('waterDistributionPieChart').getContext('2d');
    var waterDistributionPieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Reclaimed Water', 'Groundwater', 'CAP Water'],
            datasets: [{
                data: [1500, 800, 900],
                backgroundColor: ['#007BFF', '#28A745', '#FFC107']
            }]
        }
    });
});
