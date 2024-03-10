/**
 * The `handleScroll` function prevents the default scroll behavior, retrieves the target element's
 * offset top position, and smoothly scrolls the window to that position.
 * 
 * @param e - The parameter `e` in the `handleScroll` function is an event object that represents the
 * scroll event triggered by the user. It contains information about the event, such as the target
 * element that triggered the event and any additional data related to the scroll action.
 */
export const handleScroll = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const offsetTop = document.querySelector(target).offsetTop;
    window.scrollTo({ 
        top : offsetTop, 
        behavior : 'smooth'
    });
}