 
        const items = document.querySelectorAll('.kanban-item');
        const columns = document.querySelectorAll('.kanban-column');

        let draggedItem = null;

       
        items.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                draggedItem = item;
               
                setTimeout(() => {
                    item.style.display = 'none';
                }, 0);
            });

            item.addEventListener('dragend', () => {
                setTimeout(() => {
                    draggedItem.style.display = 'block';
                    draggedItem = null;
                }, 0);
            });
        });

        
        columns.forEach(column => {
            column.addEventListener('dragover', (e) => {
                e.preventDefault(); 
                column.classList.add('drag-over');
            });

            column.addEventListener('dragleave', () => {
                column.classList.remove('drag-over');
            });

            column.addEventListener('drop', (e) => {
                e.preventDefault();
                column.classList.remove('drag-over');
             
                column.appendChild(draggedItem);
            });
        });