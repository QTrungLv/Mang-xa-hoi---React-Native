<?php
Route::get('sendSMS', [App\Http\Controllers\TwilioSMSController::class, 'index']);
?>