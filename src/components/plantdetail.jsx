export default function PlantDetail() {
    return (
       <div className="color-div">
          <h2 className="h1-nice">{this.props.match.params.id}</h2>
          <h3>YEAH</h3>
       </div>
    );
 }