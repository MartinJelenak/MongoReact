import React from 'react';



function RedactorSystem() {
    return (
        <form>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <input class="form-control" type="text" placeholder="Default input" />
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Prolog</label>
                <div className="col-sm-10">
                    <input class="form-control" type="text" placeholder="Default input" />
                </div>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Clanok</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="form-group row">
                <div className="col-sm-1">
                    <button type="submit" className="btn btn-primary">Commit</button>
                </div>
                <div className="col-sm-11">
                    <div class="alert alert-warning" role="alert">
                        A simple warning alert—check it out!
                    </div>
                </div>
            </div>
        </form>
    );
}

export default RedactorSystem;




