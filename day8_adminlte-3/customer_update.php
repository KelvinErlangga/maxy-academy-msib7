<?php
include 'conn.php';

// Pastikan data yang diperlukan ada
if (isset($_POST['id']) && isset($_POST['name']) && isset($_POST['email'])) {
    $id = intval($_POST['id']);
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Query untuk memperbarui data customer
    $sql = "UPDATE customers SET name='$name', email='$email' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
        // Redirect ke halaman list customer
        header('Location: index.php?page=customer_list');
    } else {
        echo "Error updating record: " . $conn->error;
    }
} else {
    echo "Required fields are missing";
}

$conn->close();
?>
