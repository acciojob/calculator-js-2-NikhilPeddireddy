//your JS code here. If required.
  document.querySelectorAll('.btn').forEach(item => {
        item.addEventListener('click', event => {
            if (item.id === 'C') {
                document.getElementById('display').value = '';
            } else if (item.id === 'equal') {
                try {
                    document.getElementById('display').value = eval(document.getElementById('display').value);
                } catch (error) {
                    document.getElementById('display').value = 'Error';
                }
            } else if (item.id === 'back') {
                let currentValue = document.getElementById('display').value;
                document.getElementById('display').value = currentValue.slice(0, -1);
            } else {
                document.getElementById('display').value += item.id;
            }
        })
    });