import 'css.escape';

/**
 * Get class names for an element
 *
 * @pararm { Element } el
 * @return { Array }
 */
export function getClasses( el )
{
  if( !el.hasAttribute( 'class' ) )
  {
    return [];
  }

  try {
    return Array.prototype.slice.call( el.classList );
  } catch (e) {
    let className = el.getAttribute( 'class' );

    // remove duplicate and leading/trailing whitespaces
    className = className.trim().replace( /\s+/g, ' ' );

    // split into separate classnames
    return className.split( ' ' );
  }
}

/**
 * Returns the Class selectors of the element
 * @param  { Object } element
 * @return { Array }
 */
export function getClassSelectors( el )
{
  const classList = getClasses( el ).filter( Boolean );
  return classList.map( cl => `.${CSS.escape( cl )}` );
}
