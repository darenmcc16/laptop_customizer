import React from 'react';


function Summary(props){
    const summary = Object.keys(props.selected).map((key) =>(
        <div className="summary__option" key={key}>
        <div className="summary__option__label">{key}</div>
        <div className="summary__option__value">{props.selected}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div> 
    )
    );
    
    return(
        <div>
            {summary}
        </div>
    )
}

export default Summary;