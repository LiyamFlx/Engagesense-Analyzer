function renderChart() {
    document.getElementById('chartSection').style.display = 'block';
    const ctx = document.getElementById('sentimentChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Curiosity', 'Suspicion', 'Hope', 'Excitement', 'Anxiety'],
            datasets: [{
                data: [70, 20, 85, 90, 40],
                backgroundColor: ['#6200ea', '#3700b3', '#03dac6', '#ff9800', '#f44336'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    onClick: (event, legendItem, legend) => {
                        alert(`Details about ${legendItem.text}`);
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            const sentimentLabels = [
                                "Curiosity: Drives initial interest.",
                                "Suspicion: Indicates hesitation or doubt.",
                                "Hope: Reflects positive expectations.",
                                "Excitement: Highlights active engagement.",
                                "Anxiety: Shows concerns or uncertainties."
                            ];
                            return sentimentLabels[tooltipItem.dataIndex];
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Engagement Sentiment Distribution'
                }
            }
        }
    });
}
