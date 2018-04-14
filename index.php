<!DOCTYPE html>
<html lang="en">
<head>
<title>Youtube Search Videos</title>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="./css/style.css">
<script src="//use.fontawesome.com/567fc88304.js"></script>
<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js"></script>
<script src="./js/myscript.js"></script>
</head>
<body>
<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2">
					<h2><i class="fa fa-youtube" aria-hidden="true"></i>YouTube Search Engine</h2>
					<div id="custom-search-input">
						<div class="input-group col-md-12">
							<form id="search-form" name="search-form" onsubmit="return searchYoutube();">
								<input type="text" class="form-control" placeholder="Search...." id="search" required />
								<span class="input-group-btn">
									<button class="btn btn-info btn-lg" type="submit" id="findNow">
										<i class="glyphicon glyphicon-search"></i>
									</button>
								</span>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8 col-md-offset-2 main-div">
					<div id="results"></div>
					<div id="buttons"></div>
				</div>
			</div>   
</div>
</body>
</html>