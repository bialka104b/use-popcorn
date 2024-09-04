import { useState } from "react";
import PropTypes from 'prop-types'

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'

}

const starContainerStyle = {
    display: 'flex',
}

StarsRating.propTypess = {
    maxRating: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.number,
    colorStroke: PropTypes.string,
    className: PropTypes.string,
    messages: PropTypes.array,
    defaultRating: PropTypes.number,
    onSetExternalRating: PropTypes.func
}

export function StarsRating({
    maxRating = 1,
    color = 'yellow',
    size = 48,
    colorStroke = '#000',
    className = 'stars-rating',
    messages = [],
    defaultRating = 0,
    onSetExternalRating = () => { }
}) {
    const [rating, setRating] = useState(defaultRating);
    const [mouseRating, setMouseRating] = useState(0);

    const textStyle = {
        lineHeight: '1',
        margin: '0',
        color: color,
        fontSize: `${size / 1.5}px`
    }

    function handleRating(value) {
        setRating(value)
        onSetExternalRating(value)
    }
    
    return (
        <div style={containerStyle} className={className}>
            <div style={starContainerStyle}>
                {Array.from({ length: maxRating }, (_, i) => {
                    return <Star
                        key={crypto.randomUUID()}
                        fill={i < rating || i < mouseRating ? color: 'none'}
                        stroke={i < rating || i < mouseRating ? colorStroke : color}
                        className="cursor-pointer block"
                        onClick={() => handleRating(i + 1)}
                        onMouseEnter={() => setMouseRating(i + 1)}
                        onMouseLeave={() => setMouseRating(rating)}
                        width={size}
                        height={size}
                    />;
                })}
            </div>
            <p style={textStyle}>{
                messages.length > 0 ?
                    messages[mouseRating ? mouseRating - 1 : rating - 1] :
                    mouseRating > rating ? mouseRating : rating || ''
            }</p>
        </div>
    );
}

function Star({
    width = 20,
    height = 20,
    fill = 'yellow',
    stroke = "#000",
    className = '',
    onClick,
    onMouseLeave,
    onMouseEnter
}) {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={fill}
        stroke={stroke}
        width={width}
        height={height}
        role="button"
        className={className}
        onClick={onClick}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
    >
        <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
    </svg>
}
