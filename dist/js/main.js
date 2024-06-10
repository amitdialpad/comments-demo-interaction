// Get the CommentButton element
const commentButton = document.getElementById('CommentButton');

// Get the comments-block element
const commentsBlock = document.querySelector('.comments-block');

// Get the close button element
const closeButton = document.getElementById('CloseButton');

// Hide the comments-block by default
if (commentsBlock) {
    commentsBlock.style.display = 'none';
}

// Add click event listener to the CommentButton
if (commentButton) {
    commentButton.addEventListener('click', () => {
        // Show the comments-block
        if (commentsBlock) {
            commentsBlock.style.display = 'block';
        }
    });
}

// Add click event listener to the closeButton
if (closeButton) {
    closeButton.addEventListener('click', () => {
        // Hide the comments-block
        if (commentsBlock) {
            commentsBlock.style.display = 'none';
            commentsBlock.classList.remove('open'); // Reset the position of the comments block
        }
    });
}

// Add touch event listeners to the comments-block
if (commentsBlock) {
    let startY;
    let endY;

    commentsBlock.addEventListener('touchstart', (event) => {
        startY = event.touches[0].clientY;
    });

    commentsBlock.addEventListener('touchend', (event) => {
        endY = event.changedTouches[0].clientY;

        // Calculate the swipe direction
        const swipeDirection = endY - startY;

        // Get the height of the browser header
        const headerHeight = window.innerHeight - document.documentElement.clientHeight;

        // Swipe up
        if (swipeDirection < 0) {
            // Check if the comments block is already at the top of the viewport
            if (commentsBlock.getBoundingClientRect().top > headerHeight) {
                commentsBlock.classList.add('open');
                document.body.style.overflow = 'hidden'; // Prevent scrolling of the body content
            }
        }
        // Swipe down
        else if (swipeDirection > 0) {
            commentsBlock.classList.remove('open');
            document.body.style.overflow = ''; // Allow scrolling of the body content
        }
    });
}
// Add click event listener to the CommentButton
if (commentButton) {
    commentButton.addEventListener('click', () => {
        // Show the comments-block
        if (commentsBlock) {
            commentsBlock.style.display = 'block';
            
            
        }
    });
}

// Add click event listener to the closeButton
if (closeButton) {{
    closeButton.addEventListener('click', () => {
        // Hide the comments-block
        if (commentsBlock) {
            commentsBlock.style.display = 'none';
            commentsBlock.classList.remove('open'); // Reset the position of the comments block
            document.body.style.overflow = ''; // Allow scrolling of the body content
            
        }
    });
}
}
// Add click event listener to the closeButton
if (closeButton) {
    closeButton.addEventListener('click', () => {
        // Hide the comments-block
        if (commentsBlock) {
            commentsBlock.style.display = 'none';
            commentsBlock.classList.remove('open'); // Reset the position of the comments block
            document.body.style.overflow = ''; // Allow scrolling of the body content
        }
    });
}
