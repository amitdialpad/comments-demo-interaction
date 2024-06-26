// Get the CommentButton element
const commentButton = document.getElementById('CommentButton');

// Get the comments-block element
const commentsBlock = document.querySelector('.comments-block');
const commentsHeader = document.querySelector('.comments-header');
//Added comments header

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
if (commentsHeader) {
    let startY;
    let endY;

    commentsHeader.addEventListener('touchstart', (event) => {
        startY = event.touches[0].clientY;
    });

    commentsHeader.addEventListener('touchend', (event) => {
        endY = event.changedTouches[0].clientY;

        // Calculate the swipe direction
        const swipeDirection = endY - startY;

        // Get the height of the browser header
        //const headerHeight = window.innerHeight - document.documentElement.clientHeight;

        // Declare the commentsHeading variable
        //const commentsHeading = document.querySelector('.comments-heading');


        // Swipe up
        if (swipeDirection < 0) {
            // Check if the comments block is already at the top of the viewport
                commentsBlock.classList.add('open');
                //document.body.style.overflow = 'hidden'; // Prevent scrolling of the body content
                //commentsHeading.style.marginTop = '60px'; // Adjust the margin-top value as needed
                //closeButton.style.marginTop = '50px'; // Adjust the margin-top value as needed
            
        }
        // Swipe down
        else if (swipeDirection > 0) {
            commentsBlock.classList.remove('open');
            //document.body.style.overflow = ''; // Allow scrolling of the body content
            //commentsHeading.style.marginTop = '10px'; // Reset the margin-top value
            //closeButton.style.marginTop = '0px'; // Reset the margin-top value
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
            //document.body.style.overflow = ''; // Allow scrolling of the body content
            
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
            //document.body.style.overflow = ''; // Allow scrolling of the body content
        }
    });
}
